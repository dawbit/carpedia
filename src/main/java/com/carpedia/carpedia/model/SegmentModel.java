package com.carpedia.carpedia.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "segment")
public class SegmentModel implements Serializable {

    private static final long serialVersionUID = -3009157732242241606L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    @Size(min = 1, max = 2)
    private String name;

    @OneToMany(mappedBy = "segment")
    @JsonBackReference(value = "car-segment")
    private List<CarModel> car;

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
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

    public List<CarModel> getCar() {
        return car;
    }

    public void setCar(List<CarModel> car) {
        this.car = car;
    }

    protected SegmentModel() {
    }

    public SegmentModel(String name) {
        this.name = name;
    }

//    @Override
//    public String toString(){
//        return new com.google.gson.Gson().toJson(this);
//    }
}
