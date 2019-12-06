package com.carpedia.carpedia.security;

import com.carpedia.carpedia.repository.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    
    private UserPrincipalDetailService userPrincipalDetailService;
    private UserRepository userRepository;

    public SecurityConfiguration(UserPrincipalDetailService userPrincipalDetailService, UserRepository userRepository) {
        this.userPrincipalDetailService = userPrincipalDetailService;
        this.userRepository = userRepository;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth){
//        auth
//                .inMemoryAuthentication()
//                //.withUser("admin").password(passwordEncoder().encode("admin123")).roles("ADMIN")
//                .withUser("admin").password("admin123").roles("ROLE_ADMIN")
//                .and()
//                //.withUser("dawid").password(passwordEncoder().encode("dawid123")).roles("USER");
//                .withUser("dawid").password("dawid123").roles("ROLE_USER");
        auth.authenticationProvider(authenticationProvider());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                //.antMatchers("*").permitAll()
                //.antMatchers("/car/**").hasRole("ROLE_ADMIN")
                //.antMatchers("/simply/**").hasAnyRole("ROLE_ADMIN","ROLE_USER")
                .anyRequest().authenticated()
                .and()
                //.formLogin()
                //.loginProcessingUrl("/signin")
                //.loginPage("/login").permitAll(); .httpBasic() do usuniecia
                //.usernameParameter("txtUsername")
                //.passwordParameter("txtPassword")
                //.and()
                //.logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout")).logoutSuccessUrl("/login")
                //.rememberMe().tokenValiditySeconds(2592000).key("mySecret!").rememberMeParameter("checkRememberMe");
                .httpBasic();
    }

    @Bean
    DaoAuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
        daoAuthenticationProvider.setPasswordEncoder(passwordEncoder());
        daoAuthenticationProvider.setUserDetailsService(this.userPrincipalDetailService);

        return daoAuthenticationProvider;
    }

    // https://stackoverflow.com/questions/51208425/how-to-use-spring-security-without-password-encoding
    // niebezpieczne, ale na tą chwilę mam problem z szyfrowaniem hasła BCrypterem,
    // przy przekazywaniu @BodyRequest nie można zastsować encryption()
    // musiałbym stworzyć coś w rodzaju @JsonArg
    // https://stackoverflow.com/questions/12893566/passing-multiple-variables-in-requestbody-to-a-spring-mvc-controller-using-ajax/

    @Bean
    PasswordEncoder passwordEncoder() {
        // return new BCryptPasswordEncoder();
        return new PasswordEncoderTest();
    }
}
