# Webhooks

Webhooks are a way for your machine learning backend to receive realtime updates. Webhooks will be trigger each time a document's annotations are completed. 

## Supportd Events

`Annotation completed`

::: tip
We will support more events in the future. Please contact us if there is a need for additional events.
:::

## Add webhook
Webhooks can be added by navigating to `Integrations -> Webhooks`. You can add multiple webhooks for each dataset. Webhooks will send each annotation separated to your API endpoint.

<img src="../images/webhook-add.png"  width="600" >

### Sample webhook 

```
POST

{
   "dataset":"5720477930618880",
   "annotation":{
      "entities":[
         {
            "end":4,
            "start":0,
            "label":"year"
         }
      ],
      "text":"1813 First exposition of the rocket equation based on Newton's third law of motion: Treatise on the Motion of Rockets"
   }
}
```


## List webhooks
On the same page, we provide an overview of all webhooks for all datasets. If you want to remove a webhook just click `delete`.

![datasets](../images/webhook-list.png)