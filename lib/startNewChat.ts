import client from "@/graphql/apolloClient";
import { INSERT_CHAT_SESSION, INSERT_GUEST, INSERT_MESSAGE } from "@/graphql/mutations";

async function startNewChat(guestName: string, guestEmail: string, chatbotId: number) {
    try {

        const createdAt = new Date().toISOString();

        const guestResult = await client.mutate({
            mutation: INSERT_GUEST,
            variables: {name: guestName, email: guestEmail, created_at: createdAt}
        })
        
        const guestId = guestResult.data.insertGuests.id;
        
        const chatSessionResult = await client.mutate({
            mutation: INSERT_CHAT_SESSION,
            variables: {chatbot_id: chatbotId, guest_id: guestId, created_at: createdAt}
        })


        const chatSessionId = chatSessionResult.data.insertChat_sessions.id;


        await client.mutate({
            mutation: INSERT_MESSAGE,
            variables: {
                chat_session_id: chatSessionId,
                sender: "ai",
                content: `Welcome ${guestName}!\n How can I assist you today?`,
                created_at: createdAt  
            }
        });
        

        console.log("Message Mutation Payload:", {
            chat_session_id: chatSessionId,
            sender: "ai",
            content: `Welcome ${guestName}!\n How can I assist you today?`,
            created_at: createdAt
        });
        
        console.log("New Chat session started successfully")
        return chatSessionId;
        
    }
    
    catch (error) {
        console.error("Error starting new chat sessions:", error);
    }
}

export default startNewChat;