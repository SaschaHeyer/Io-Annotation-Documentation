# Dictionaries
::: tip
Supported for Named Entity Recognition
::: 

Dictionaries can be used to speedup your annotators by pre annotating words. 
For example you might want to annotate street names, and have a already existing list of names.

* Dictionary entries are case sensitive.
* We automatically remove duplicated entries. 
* Dictionary entries for each label should be unique.


::: warning
Dictionaries are not a all purpose solution, a well done annotation is still required in order to prevent biasing. Please train your annotators to carefully challenge the pre-annotations. 
:::

## Add dictionary