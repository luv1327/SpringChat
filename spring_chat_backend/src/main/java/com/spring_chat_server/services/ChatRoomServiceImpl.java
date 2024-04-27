package com.spring_chat_server.services;

import com.spring_chat_server.repositories.ChatRoomRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatRoomServiceImpl implements ChatRoomService{
    @Autowired
    private ChatRoomRepo chatRoomRepo;
}
