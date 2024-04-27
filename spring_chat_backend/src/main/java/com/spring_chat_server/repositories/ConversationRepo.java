package com.spring_chat_server.repositories;

import com.spring_chat_server.models.Conversation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConversationRepo extends JpaRepository<Conversation,Long> {
}
