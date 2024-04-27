package com.spring_chat_server.controllers;

import com.spring_chat_server.dtos.*;
import com.spring_chat_server.services.AuthService;
import com.spring_chat_server.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
@RestController
@RequestMapping("/v1/auth")
public class AuthController {
    @Autowired
    private AuthService authService;
    @PostMapping("/login")
    public ResponseEntity<BaseResponseDto> login(@RequestBody LoginRequestDto loginRequestDto){
        BaseResponseDto loginResponse = authService.login(loginRequestDto);
        return new ResponseEntity<>(loginResponse,HttpStatus.OK);
    }
    @PostMapping("/sign-up")
    public ResponseEntity<BaseResponseDto> signUp(@RequestBody SignUpRequestDto signUpRequestDto){
        BaseResponseDto signUpResponse = authService.signUp(signUpRequestDto);
        return new ResponseEntity<>(signUpResponse,HttpStatus.OK);
    }
    @GetMapping("/login-check")
    public ResponseEntity<BaseResponseDto> loginCheck(@RequestHeader("Authorization") String token){
        BaseResponseDto signUpResponse = authService.loginCheck(token);
        return new ResponseEntity<>(signUpResponse,HttpStatus.OK);
    }
    @PostMapping("/logout")
    public ResponseEntity<BaseResponseDto> logout(@RequestBody LogoutRequestDto logoutRequestDto) {
        BaseResponseDto logoutResponse = authService.logout(logoutRequestDto);
        return new ResponseEntity<>(logoutResponse,HttpStatus.OK);
    }

}
