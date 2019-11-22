package com.carpedia.carpedia.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "engine")
public class EngineModel implements Serializable {

    private static final long serialVersionUID = -3009157732242241606L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "power")
    private int power;

    @Column(name = "capacity")
    private float capacity;

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPower(int power) {
        this.power = power;
    }

    public void setCapacity(float capacity) {
        this.capacity = capacity;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getPower() {
        return power;
    }

    public float getCapacity() {
        return capacity;
    }

    protected EngineModel() {
    }

    public EngineModel(String name, int power, float capacity) {
        this.name = name;
        this.power = power;
        this.capacity = capacity;
    }

    @Override
    public String toString(){
        return new com.google.gson.Gson().toJson(this);
    }
}
