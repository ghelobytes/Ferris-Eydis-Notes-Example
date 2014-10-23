from google.appengine.ext import ndb
import ferris3 as f3
import datetime


class Note(f3.ndb.Model):
    created = ndb.DateTimeProperty(auto_now_add=True)
    content = ndb.TextProperty()

    def before_put(self):
        if not self.created:
            self.created = datetime.datetime.utcnow()


@f3.auto_service
class NotesService(f3.Service):

    get = f3.hvild.get(Note)
    list = f3.hvild.paginated_list(Note, name='list', limit=5, query=Note.query().order(-Note.created))
    insert = f3.hvild.insert(Note)
    update = f3.hvild.update(Note)
    delete = f3.hvild.delete(Note)
