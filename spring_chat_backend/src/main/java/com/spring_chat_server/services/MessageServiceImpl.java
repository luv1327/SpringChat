package com.spring_chat_server.services;

import com.spring_chat_server.dtos.BaseDtoStatus;
import com.spring_chat_server.dtos.BaseResponseDto;
import com.spring_chat_server.dtos.MessageRequestDto;
import com.spring_chat_server.dtos.MessageResponseDto;
import com.spring_chat_server.models.Message;
import com.spring_chat_server.models.MessageType;
import com.spring_chat_server.repositories.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MessageServiceImpl implements MessageService {
    @Autowired
    private MessageRepo messageRepo;
    @Autowired
    private UserService userService;
    @Override
    public BaseResponseDto sendPrivateMessage(MessageRequestDto messageRequestDto)  {
        BaseResponseDto baseResponseDto = new BaseResponseDto();
        Message message = convertMessageDtoToMessageEntity(messageRequestDto);
        messageRepo.save(message);
        Map<String,Object> responseData = new HashMap<>();
        MessageResponseDto messageResponseDto = convertMessageRequestToMessageResponse(messageRequestDto);
        responseData.put("messageData",messageRequestDto);
        baseResponseDto.setResponseData(responseData);
        baseResponseDto.setStatus(BaseDtoStatus.success);
        return baseResponseDto;
    }

    public Message convertMessageDtoToMessageEntity(MessageRequestDto messageRequestDto){
        Message message = new Message();
        message.setContent(messageRequestDto.getContent());
        message.setSenderId(messageRequestDto.getSenderId());
        message.setReceiverId(messageRequestDto.getReceiverId());
        message.setTimestamp(messageRequestDto.getDate());
        message.setType(MessageType.valueOf(messageRequestDto.getType()));
        return message;
    }
    public MessageResponseDto convertMessageRequestToMessageResponse(MessageRequestDto messageRequestDto){
        MessageResponseDto messageResponseDto = new MessageResponseDto();
        messageResponseDto.setContent(messageRequestDto.getContent());
        messageResponseDto.setDate(messageRequestDto.getDate());
        messageResponseDto.setReceiverId(messageRequestDto.getReceiverId());
        messageResponseDto.setGroupId(messageRequestDto.getGroupId());
        messageResponseDto.setSenderId(messageRequestDto.getSenderId());
        messageResponseDto.setType(messageResponseDto.getType());
        return messageResponseDto;
    }

    @Override
    public Optional<Message> getLastMessage(Long userIdOne, Long userIdTwo) {
        return messageRepo.findLastMessageForUser(userIdOne,userIdTwo);
    }

    @Override
    public BaseResponseDto getAllMessages(Long userId) {
        BaseResponseDto baseResponseDto = new BaseResponseDto();
        Long currentUserId = userService.getCurrentUserId();
        List<Message> messageList = messageRepo.findAllMessagesWithUser(currentUserId,userId);
        Map<String,Object> responseData = new HashMap<>();
        responseData.put("messages",messageList);
        baseResponseDto.setResponseData(responseData);
        return baseResponseDto;
    }
}
