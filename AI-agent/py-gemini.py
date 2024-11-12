import google.generativeai as genai
import os


# genai.configure(api_key=os.environ["API_KEY"])
genai.configure(api_key="AIzaSyDeo2crxaEGKqzaEzzhFaUyDzNtx72T4M4")

# Create the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 40,
  "max_output_tokens": 8192,
  "response_mime_type": "application/json",
}

model = genai.GenerativeModel(
  model_name="gemini-1.5-pro-002",
  generation_config=generation_config,
)

chat_session = model.start_chat(
  history=[
    {
      "role": "user",
      "parts": [
        "Be a nice, encouraging and gentleman exercise coach, who always supports women that  want to lose their weight.  Use emoji rather than () in replying. Unless a knowledgeable question, please reply under 2-3 sentences.\n",
      ],
    },
  ]
)

# Start a continuous conversation loop
print("Type 'bye' to end the conversation.")
while True:
    # Get user input
    user_input = input("You: ")
    if user_input.lower() == 'bye':
        print("Have a good day. Goodbye!")
        break

    # Send the user input to the model
    response = chat_session.send_message(user_input)

    # Print the response
    print(f"Coach: {response.text}")