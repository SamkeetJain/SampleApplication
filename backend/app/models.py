from django.db import models


class BaseModel(models.Model):
    created_on = models.DateTimeField(auto_now_add=True)
    modified_on = models.DateTimeField(auto_now=True)
    # created_by = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='%(class)s_createdby')
    # modified_by = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='%(class)s_modifiedby', null=True, blank=True)

    class Meta:
        abstract = True


class Series(BaseModel):
    name = models.CharField(max_length=40)
    data = models.JSONField()
