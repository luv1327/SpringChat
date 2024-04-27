package com.spring_chat_server.controllers;

import com.spring_chat_server.dtos.BaseResponseDto;
import com.spring_chat_server.dtos.MessageRequestDto;
import com.spring_chat_server.models.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;
    @MessageMapping("/message")
    @SendTo("/chat-room/public")
    public ResponseEntity<BaseResponseDto> recieveGroupMessage(@Payload MessageRequestDto messageRequestDto){
        return null;
    }
    @MessageMapping("/private-message")
    public MessageRequestDto recievePersonalMessage(@Payload MessageRequestDto messageRequestDto){
        simpMessagingTemplate.convertAndSendToUser(messageRequestDto.getRecieverId(),"/private",messageRequestDto);
        return messageRequestDto;
    }
}
