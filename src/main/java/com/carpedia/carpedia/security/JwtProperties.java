package com.carpedia.carpedia.security;

public class JwtProperties {
    public static final String SECRET = "DawidB123";
    public static final int EXPIRATION_TIME = 3600000; // 1 hr
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
}
