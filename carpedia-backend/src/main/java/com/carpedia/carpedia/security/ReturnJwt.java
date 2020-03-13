package com.carpedia.carpedia.security;

public class ReturnJwt {

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public boolean getRole(boolean role) {
        return role;
    }

    public void setRole(boolean role) {
        this.role = role;
    }

    String jwt;
    boolean role;
}
