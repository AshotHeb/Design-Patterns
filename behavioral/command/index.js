class Button {
  constructor(label) {
    this.label = label;
  }

  click(command) {
    command.execute(this);
  }

  getLabel() {
    return this.label;
  }
}

class SaveCommand {
  execute(button) {
    console.log(`${button.getLabel()} save command executed`);
  }
}

class CopyCommand {
  execute(button) {
    console.log(`${button.getLabel()} copy command executed`);
  }
}

const saveButton = new Button("Save");
const copyButton = new Button("Copy");

saveButton.click(new SaveCommand());
copyButton.click(new CopyCommand());
