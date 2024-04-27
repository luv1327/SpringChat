package com.spring_chat_server.services;

import com.spring_chat_server.dtos.BaseResponseDto;
import com.spring_chat_server.dtos.LoginRequestDto;
import com.spring_chat_server.dtos.LogoutRequestDto;
import com.spring_chat_server.dtos.SignUpRequestDto;
import org.springframework.web.bind.annotation.RequestHeader;

public interface AuthService {
    BaseResponseDto login(LoginRequestDto loginRequestDto);
    BaseResponseDto signUp(SignUpRequestDto signUpRequestDto);

    BaseResponseDto loginCheck(String token);
    BaseResponseDto logout(LogoutRequestDto logoutRequestDto);
}
