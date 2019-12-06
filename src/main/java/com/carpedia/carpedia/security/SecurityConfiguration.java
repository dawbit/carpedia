package com.carpedia.carpedia.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .inMemoryAuthentication()
                //.withUser("admin").password(passwordEncoder().encode("admin123")).roles("ADMIN")
                .withUser("admin").password("admin123").roles("ADMIN")
                .and()
                //.withUser("dawid").password(passwordEncoder().encode("dawid123")).roles("USER");
                .withUser("dawid").password("dawid123").roles("USER");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/car/**").hasRole("ADMIN")
                .antMatchers("/simply/**").hasAnyRole("ADMIN","USER")
                .anyRequest().authenticated()
                .and()
                .httpBasic();
    }

    // https://stackoverflow.com/questions/51208425/how-to-use-spring-security-without-password-encoding
    // niebezpieczne, ale na tą chwilę mam problem z szyfrowaniem hasła BCrypterem,
    // przy przekazywaniu @BodyRequest nie można zastsować encryption()
    // musiałbym stworzyć coś w rodzaju @JsonArg
    // https://stackoverflow.com/questions/12893566/passing-multiple-variables-in-requestbody-to-a-spring-mvc-controller-using-ajax/
    @Bean
    PasswordEncoder passwordEncoder() {
        return new PasswordEncoderTest();
    }
}
