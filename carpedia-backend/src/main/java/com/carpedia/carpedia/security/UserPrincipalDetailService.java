package com.carpedia.carpedia.security;

import com.carpedia.carpedia.model.UserModel;
import com.carpedia.carpedia.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserPrincipalDetailService implements UserDetailsService {
    private UserRepository userRepository;

    public UserPrincipalDetailService(UserRepository userRepository){
        this.userRepository=userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        UserModel user = this.userRepository.findByLogin(s);
        UserPrincipal userPrincipal = new UserPrincipal(user);

        return userPrincipal;
    }
}
