package com.carpedia.carpedia.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "simplycar")
public class SimplyCar implements Serializable {

    private static final long serialVersionUID = -3009157732242241606L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "company")
    private String company;

    @Column(name = "model")
    private String model;

    protected SimplyCar() {
    }

    public SimplyCar(String company, String model) {
        this.company = company;
        this.model = model;
    }

    @Override
    public String toString() {
        return String.format("SimplyCar[id=%d, company='%s', model='%s']", id, company, model);
    }
}
