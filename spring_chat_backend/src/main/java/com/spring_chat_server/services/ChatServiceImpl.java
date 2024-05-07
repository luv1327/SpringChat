package com.spring_chat_server.services;
import com.spring_chat_server.dtos.UserChatResponseDto;
import com.spring_chat_server.models.Message;
import com.spring_chat_server.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ChatServiceImpl implements ChatService {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;

    @Autowired
    private MessageService messageService;

    @Override
    public List<UserChatResponseDto> getChats() {
        List<User> users = authService.getAllUsers();
        return convertToUserChatResponseDto(users);
    }

    public List<UserChatResponseDto> convertToUserChatResponseDto(List<User> users) {
        Long currentUserId = userService.getCurrentUserId();

        List<UserChatResponseDto> allUsers = users.stream()
                .map(user -> mapToUserChatResponseDto(user, currentUserId))
                .sorted(Comparator.comparing(UserChatResponseDto::getLastMessageDate, Comparator.nullsLast(Comparator.reverseOrder())))
                .collect(Collectors.toList());

        return allUsers;
    }

    private UserChatResponseDto mapToUserChatResponseDto(User user, Long currentUserId) {
        UserChatResponseDto dto = new UserChatResponseDto();
        dto.setId(user.getId());
        dto.setName(user.getUsername());
        dto.setAvatar(user.getAvatarUrl());
        dto.setLastMessageDate(null);
        Optional<Message> lastMessage = messageService.getLastMessage(currentUserId, user.getId());
        lastMessage.ifPresent(message -> {
            dto.setLastMessage(message.getContent());
            dto.setLastMessageDate(message.getTimestamp());
        });

        return dto;
    }
}
