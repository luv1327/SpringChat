package com.spring_chat_server.services;

import com.spring_chat_server.dtos.BaseDtoStatus;
import com.spring_chat_server.dtos.BaseResponseDto;
import com.spring_chat_server.dtos.UserChatResponseDto;
import com.spring_chat_server.models.User;
import com.spring_chat_server.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> userDetail = userRepo.findByUsername(username);
        // Converting userDetail to UserDetails
        return userDetail.orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
    }

    public BaseResponseDto getAllUsers(){
        BaseResponseDto baseResponseDto = new BaseResponseDto();
        List<User> allUsers = userRepo.findAll();
        List<UserChatResponseDto> userChatList = new ArrayList<>();
        for(User user : allUsers){
            userChatList.add(convertUserToDto(user));
        }
        Map<String,Object> responseData = new HashMap<>();
        responseData.put("users",userChatList);
        baseResponseDto.setResponseData(responseData);
        baseResponseDto.setStatus(BaseDtoStatus.success);
        return baseResponseDto;
    }

    public UserChatResponseDto convertUserToDto(User user){
        UserChatResponseDto userChatResponseDto = new UserChatResponseDto();
        userChatResponseDto.setName(user.getUsername());
        userChatResponseDto.setAvatar(user.getAvatarUrl());
        userChatResponseDto.setLastMessage("");
        userChatResponseDto.setLastMessageDate(new Date());
        return userChatResponseDto;
    }

}
