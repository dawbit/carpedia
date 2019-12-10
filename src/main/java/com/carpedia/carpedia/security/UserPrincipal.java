package com.carpedia.carpedia.security;

import com.carpedia.carpedia.model.UserModel;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class UserPrincipal implements UserDetails {
    private UserModel userModel;

    public UserPrincipal(UserModel userModel){
        this.userModel=userModel;
    }


    // via tutorial:
    // https://github.com/dangeabunea/RomanianCoderExamples/
    // https://www.youtube.com/watch?v=wNN6S_HsD4o
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();

        String userRoleName;
        boolean userRole = this.userModel.getIsmod();

        if(userRole==true){
            userRoleName = "ADMIN";
        }
        else{
            userRoleName = "USER";
        }

        GrantedAuthority authority = new SimpleGrantedAuthority("ROLE_"+ userRoleName);
        authorities.add(authority);

        return authorities;
    }

    @Override
    public String getPassword() {
        return this.userModel.getPassword();
    }

    @Override
    public String getUsername() {
        return this.userModel.getLogin();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        //return this.user.getIsactive();
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return this.userModel.getIsactive();
        //return this.user.getIsactive()==true;
    }

    public boolean getRole() { return  this.userModel.getIsmod(); }
}
