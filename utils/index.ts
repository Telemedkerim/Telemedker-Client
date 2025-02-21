export function focusNextInput(event: Event) {
    const form = event.target.form;
    const index = Array.prototype.indexOf.call(form, event.target);
    const nextInput = form.elements[index + 1];
        if (form.elements[index + 1]) {
          nextInput.focus();
          nextInput.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'center' });
        }
  }