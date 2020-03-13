package com.carpedia.carpedia.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private AuthenticationManager authenticationManager;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        //taking credentials and mapping them to LoginModel
        LoginViewModel credentials = null;
        try {
            credentials = new ObjectMapper().readValue(request.getInputStream(), LoginViewModel.class);
        } catch (IOException e) {
            e.printStackTrace();
        }

        //create token
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                credentials.getUsername(),
                credentials.getPassword(),
                new ArrayList<>());
        //System.out.println(authenticationToken);

        //authenticate user
        Authentication auth = authenticationManager.authenticate(authenticationToken);
        System.out.println(auth);
        return auth;
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        //take principal
        UserPrincipal principal = (UserPrincipal) authResult.getPrincipal();
        boolean role = principal.getRole();

        //create JWT token
        String token = JWT.create()
                .withSubject(principal.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + JwtProperties.EXPIRATION_TIME))
                .sign(Algorithm.HMAC512(JwtProperties.SECRET.getBytes()));

        response.addHeader(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + token);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        //{"jwt": x, "role": x}
        ReturnJwt returnJwt = new ReturnJwt();
        returnJwt.setJwt(JwtProperties.TOKEN_PREFIX + token);
        returnJwt.setRole(role);

        String json = new Gson().toJson(returnJwt);
        response.getWriter().print(json);
        response.getWriter().flush();

    }
}
