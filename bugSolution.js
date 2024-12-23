```javascript
//Correct way to update state using functional updates
this.setState(prevState => ({ count: prevState.count + 1 }));
```