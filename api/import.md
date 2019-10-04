---
title: "Import"
---

# Import

Importing your text to your dataset is done via API.

### Endpoint

```
POST /api/import
```

### Request body

| Name    |  Type  | Description                                                                                      |
| :------ | :----: | :----------------------------------------------------------------------------------------------- |
| dataset | string | The dataset which the text should be uploaded. <br/>_ID can be found on the dataset detail page_ |
| text    | string | The text later used for annotation.                                                              |

```json
{
  "dataset": "5693561773228032",
  "text": "The Vostok programme was a Soviet human spaceflight project."
}
```

### Response

If successful, the response statuscode is `200`
