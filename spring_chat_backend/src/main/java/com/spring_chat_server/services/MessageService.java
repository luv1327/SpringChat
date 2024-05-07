package com.spring_chat_server.services;

import com.spring_chat_server.dtos.BaseResponseDto;
import com.spring_chat_server.dtos.MessageRequestDto;
import com.spring_chat_server.dtos.MessageResponseDto;
import com.spring_chat_server.models.Message;

import java.util.List;
import java.util.Optional;

public interface MessageService {
    BaseResponseDto sendPrivateMessage(MessageRequestDto messageRequestDto);
    Optional<Message> getLastMessage(Long userIdOne, Long userIdTwo);

    BaseResponseDto getAllMessages(Long userId);
}
