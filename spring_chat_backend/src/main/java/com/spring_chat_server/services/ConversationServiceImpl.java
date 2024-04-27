package com.spring_chat_server.services;

import com.spring_chat_server.repositories.ConversationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConversationServiceImpl implements ConversationService{
    @Autowired
    private ConversationRepo conversationRepo;
}
