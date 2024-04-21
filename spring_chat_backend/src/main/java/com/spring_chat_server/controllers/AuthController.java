package com.spring_chat_server.controllers;

import com.spring_chat_server.dtos.UserLoginDto;
import com.spring_chat_server.dtos.UserLoginResponseDto;
import com.spring_chat_server.models.User;
import com.spring_chat_server.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtils jwtUtils;
    public ResponseEntity<?> authenticateUser(UserLoginDto userLoginDto){
        Authentication authentication =
                authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        userLoginDto.getUsername(),
                        userLoginDto.getPassword())
                );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        User userDetails = (User) authentication.getPrincipal();
        String jwt = jwtUtils.generateToken(userDetails.getUsername());

        return ResponseEntity.ok(new UserLoginResponseDto(jwt));
    }
}
