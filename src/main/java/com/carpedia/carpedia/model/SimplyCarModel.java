package com.carpedia.carpedia.model;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import java.io.Serializable;

@Entity
@Table(name = "simplycar")
public class SimplyCarModel implements Serializable {
    //this model is created for using in tests

    private static final long serialVersionUID = -3009157732242241606L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "company")
    @Pattern(regexp = "^[a-zA-Z0-9 ]*")
    private String company;

    @Column(name = "model")
    @Pattern(regexp = "^[a-zA-Z0-9 ]*")
    private String model;


    public void setId(long id) {
        this.id = id;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public long getId() {
        return id;
    }

    public String getCompany() {
        return company;
    }

    public String getModel() {
        return model;
    }

    protected SimplyCarModel() {
    }

    public SimplyCarModel(String company, String model) {
        this.company = company;
        this.model = model;
    }

//    @Override
//    public String toString(){
//        return new com.google.gson.Gson().toJson(this);
//    }
}
