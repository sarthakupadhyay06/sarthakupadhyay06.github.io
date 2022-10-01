import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('ADD SOME TASK');
      return;
    }
    onAdd({ text, day, reminder });
    setText('');
    setDay('');
    setReminder(false);
  };
  return (
    <form className="form-group" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">New Task</label>
        <input
          type="text"
          placeholder="Add New Task"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="dayTime">Day & Time</label>
        <input
          type="datetime"
          placeholder="Add Day & Time"
          checked={reminder}
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
      </div>
      <div className="form-control check">
        <label htmlFor="reminder">Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        />
      </div>
      <input type="submit" className="btn btn-block" value="New Task" />
    </form>
  );
};

export default AddTask;