---
title: "Export"
---

# Export

### Endpoint

```
GET /api/export
```

### Query Parameters

| Name    |  Type  | Description                                                                                       |
| :------ | :----: | :------------------------------------------------------------------------------------------------ |
| dataset | string | The dataset which contains your annotated data. <br/>_ID can be found on the dataset detail page_ |

### Response body (Named Entity Recognition)

```json
{
  "results": 2,
  "annotations": [
    {
      "entities": [
        {
          "end": 4,
          "start": 0,
          "label": "year"
        }
      ],
      "text": "1813 First exposition of the rocket equation based on Newton's third law of motion: Treatise on the Motion of Rockets"
    },
    {
      "entities": [
        {
          "end": 4,
          "start": 0,
          "label": "year"
        },
        {
          "end": 74,
          "start": 65,
          "label": "planet"
        },
        {
          "end": 119,
          "start": 114,
          "label": "planet"
        }
      ],
      "text": "1610 First telescopic observation of the night sky: discovery of Jupiter's moons, lunar craters and the phases of Venus."
    }
  ]
}
```

### Response body (Classification)

```json
{
  "results": 5,
  "annotations": [
    {
      "labels": ["space"],
      "text": "1610 First telescopic observation of the night sky: discovery of Jupiter's moons, lunar craters and the phases of Venus."
    },
    {
      "labels": ["space"],
      "text": "1861 A Journey Through Space makes first proposal of using rockets for space flight"
    }
  ]
}
```
