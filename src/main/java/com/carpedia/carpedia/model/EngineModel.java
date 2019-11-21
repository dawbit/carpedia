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

    protected EngineModel() {
    }

    public EngineModel(String name, int power, float capacity) {
        this.name = name;
        this.power = power;
        this.capacity = capacity;
    }

    @Override
    public String toString() {
        return String.format("Engine[id=%d, name='%s', power='%s', capacity='%s']", id, name, power, capacity);
    }
}
