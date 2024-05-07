package com.spring_chat_server.services;

import com.spring_chat_server.dtos.UserChatResponseDto;
import com.spring_chat_server.models.User;

import java.util.List;

public interface ChatService {
    List<UserChatResponseDto> getChats();
}
