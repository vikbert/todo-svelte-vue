import { Todo, TodoService } from '../../src/services/TodoService';

describe('todoService', () => {
  it('can count the list', () => {
    const todo1 = new Todo('firefox');
    const todo2 = new Todo('chrome');
    const service = new TodoService([todo1, todo2]);

    expect(service.count()).to.equal(2);
  });

  it('can return the empty list', () => {
    const service = new TodoService([]);

    expect(service.list().length).to.equal(0);
  });

  it('can insert a new todo', () => {
    const service = new TodoService([]);
    expect(service.count()).to.equal(0);

    service.add(new Todo('firefox'));

    expect(service.count()).to.equal(1);
  });

  it('can delete the existing todo ', () => {
    const service = new TodoService([]);
    service.add(new Todo('firefox', 'ID-1'));
    expect(service.count()).to.equal(1);

    service.delete('ID-1');
    expect(service.count()).to.equal(0);
  });

  it('can complete a existing todo', () => {
    const service = new TodoService([]);
    service.add(new Todo('firefox', 'ID-1'));
    service.add(new Todo('chrome', 'ID-0'));

    service.complete('ID-1');

    expect(service.count()).to.equal(2);
    expect(service.list()[0].title).to.equal('chrome');
    expect(service.list()[0].completed).to.false;

    expect(service.list()[1].title).to.equal('firefox');
    expect(service.list()[1].completed).to.true;
  });

  it('can clear the completed todos', () => {
    const service = new TodoService([]);
    service.add(new Todo('firefox', 'ID-2'));
    service.add(new Todo('chrome', 'ID-1'));
    service.add(new Todo('safari', 'ID-0'));
    service.complete('ID-2');
    service.complete('ID-1');
    service.clearCompleted();
    expect(service.count()).to.equal(1);
    expect(service.list()[0].title).to.equal('safari');
    expect(service.list()[0].completed).to.equal(false);
  });

  it('can return active/completed todos', () => {
    const service = new TodoService([]);
    service.add(new Todo('firefox', 'ID-2'));
    service.add(new Todo('chrome', 'ID-1'));
    service.add(new Todo('safari', 'ID-0'));
    service.complete('ID-2');
    service.complete('ID-1');
    const completedTodos = service.getCompleted();
    expect(completedTodos.length).to.equal(2);

    const activeTodos = service.getActive();
    expect(activeTodos.length).to.equal(1);
  });
});
