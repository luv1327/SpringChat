package com.spring_chat_server.services;

import com.spring_chat_server.dtos.BaseResponseDto;
import com.spring_chat_server.dtos.LoginRequestDto;
import com.spring_chat_server.dtos.LogoutRequestDto;
import com.spring_chat_server.dtos.SignUpRequestDto;
import com.spring_chat_server.models.User;
import org.springframework.web.bind.annotation.RequestHeader;

import java.util.List;

public interface AuthService {
    BaseResponseDto login(LoginRequestDto loginRequestDto);
    BaseResponseDto signUp(SignUpRequestDto signUpRequestDto);

    BaseResponseDto loginCheck(String token);
    BaseResponseDto logout(LogoutRequestDto logoutRequestDto);

    List<User> getAllUsers();
}
