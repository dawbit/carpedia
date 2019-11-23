package com.carpedia.carpedia.model;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Table(name="users")
public class UserModel implements Serializable {

    private static final long serialVersionUID = -3009157732242241606L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "login", unique = true, nullable = false)
    @Size(min = 4, max = 20)
    private String login;

    @Column(name = "password", nullable = false)
    @Size(min = 4, max = 20)
    private String password;

    @Column(name = "fname")
    @Size(min = 4, max = 20)
    private String fname;

    @Column(name = "lname")
    @Size(min = 4, max = 20)
    private String lname;

    @Column(name = "ismod", columnDefinition = "boolean default false")
    private boolean ismod;

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public boolean isIsmod() {
        return ismod;
    }

    public void setIsmod(boolean ismod) {
        this.ismod = ismod;
    }


    protected UserModel() { }

    public UserModel(String login, String password, String fname, String lname) {
        this.login = login;
        this.password = password;
        this.fname = fname;
        this.lname = lname;
    }

}
