package com.carpedia.carpedia.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

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
    @JsonBackReference
    private String password;

    @Column(name = "fname")
    @Size(min = 4, max = 20)
    private String fname;

    @Column(name = "lname")
    @Size(min = 4, max = 20)
    private String lname;

    @Column(name = "ismod", columnDefinition = "boolean default false")
    private boolean ismod;

    @Column(name = "isactive", columnDefinition = "boolean default false")
    private boolean isactive;

    @OneToMany(mappedBy = "user")
    @JsonBackReference(value = "car-user")
    private List<CarModel> car;

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

    public boolean getIsmod() {
        return ismod;
    }

    public void setIsmod(boolean ismod) {
        this.ismod = ismod;
    }

    public boolean getIsactive() {
        return isactive;
    }

    public void setIsactive(boolean isactive) {
        this.isactive = isactive;
    }

    public List<CarModel> getCar() {
        return car;
    }

    public void setCar(List<CarModel> car) {
        this.car = car;
    }

    public UserModel() { }

    public UserModel(String login, String password, String fname, String lname, boolean ismod, boolean isactive) {
        this.login = login;
        this.password = password;
        this.fname = fname;
        this.lname = lname;
        this.isactive = isactive;
        this.ismod = ismod;
    }

}
