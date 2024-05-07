package com.spring_chat_server.controllers;

import com.spring_chat_server.dtos.BaseDtoStatus;
import com.spring_chat_server.dtos.BaseResponseDto;
import com.spring_chat_server.dtos.UserChatResponseDto;
import com.spring_chat_server.services.ChatService;
import com.spring_chat_server.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/v1/chat")
public class ChatRestController {
    @Autowired
    private ChatService chatService;
    @Autowired
    private MessageService messageService;
    @GetMapping("/get-chat-list")
    public ResponseEntity<BaseResponseDto> getChatList(){
        BaseResponseDto baseResponseDto = new BaseResponseDto();
        List<UserChatResponseDto> chats = chatService.getChats();
        Map<String,Object> responseData = new HashMap<>();
        responseData.put("chats",chats);
        baseResponseDto.setResponseData(responseData);
        baseResponseDto.setStatus(BaseDtoStatus.success);
        return new ResponseEntity<>(baseResponseDto,HttpStatus.OK);
    }

    @GetMapping("/get-all-messages/{userId}")
    public ResponseEntity<BaseResponseDto> getAllMessages(@PathVariable("userId") Long userId){
        BaseResponseDto baseResponseDto = messageService.getAllMessages(userId);
        return new ResponseEntity<>(baseResponseDto,HttpStatus.OK);
    }
}
