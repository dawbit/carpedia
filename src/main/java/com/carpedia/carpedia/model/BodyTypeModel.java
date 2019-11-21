package com.carpedia.carpedia.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "bodytype")
public class BodyTypeModel implements Serializable {

    private static final long serialVersionUID = -3009157732242241606L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    protected BodyTypeModel() {
    }

    public BodyTypeModel(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return String.format("Body Type[id=%d, country='%s']", id, name);
    }
}
