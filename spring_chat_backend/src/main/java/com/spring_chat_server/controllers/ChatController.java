package com.spring_chat_server.controllers;
import com.spring_chat_server.dtos.BaseResponseDto;
import com.spring_chat_server.dtos.MessageRequestDto;
import com.spring_chat_server.dtos.MessageResponseDto;
import com.spring_chat_server.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import java.util.HashMap;
import java.util.Map;

@Controller
public class ChatController {
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;
    @Autowired
    private MessageService messageService;
    @MessageMapping("/send-message")
    @SendTo("/group-chat/receive-message")
    public ResponseEntity<BaseResponseDto> recieveGroupMessage(@Payload MessageRequestDto messageRequestDto){
        BaseResponseDto baseResponseDto = new BaseResponseDto();
        Map<String,Object> responseData = new HashMap<>();
        responseData.put("messageData",messageRequestDto);
        baseResponseDto.setResponseData(responseData);
        return new ResponseEntity<>(baseResponseDto, HttpStatus.OK);
    }
    @MessageMapping("/send-private-message")
    public ResponseEntity<BaseResponseDto> sendPrivateMessages(@Payload MessageRequestDto messageRequestDto){
        BaseResponseDto baseResponseDto = messageService.sendPrivateMessage(messageRequestDto);
        simpMessagingTemplate.convertAndSendToUser(messageRequestDto.getReceiverId().toString(),"/receive-private-message",baseResponseDto);
        return new ResponseEntity<>(baseResponseDto, HttpStatus.OK);
    }

}
