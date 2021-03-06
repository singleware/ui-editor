/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as JSX from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import { Properties } from './properties';
import { Element } from './element';
import { Styles } from './styles';

/**
 * Editor component class.
 */
@Class.Describe()
export class Component<T extends Properties = Properties> extends Control.Component<T> {
  /**
   * Element instance.
   */
  @Class.Private()
  private skeleton = (
    <swe-editor
      class={this.properties.class}
      slot={this.properties.slot}
      name={this.properties.name}
      value={this.properties.value}
      defaultValue={this.properties.defaultValue}
      required={this.properties.required}
      readOnly={this.properties.readOnly}
      disabled={this.properties.disabled}
      preserveSelection={this.properties.preserveSelection}
      paragraphType={this.properties.paragraphType}
      deniedTags={this.properties.deniedTags}
      orientation={this.properties.orientation}
      onChange={this.properties.onChange}
    >
      {this.children}
    </swe-editor>
  ) as Element;

  /**
   * Gets the element.
   */
  @Class.Public()
  public get element(): Element {
    return this.skeleton;
  }

  /**
   * Determines whether the element is empty or not.
   */
  @Class.Public()
  public get empty(): boolean {
    return this.skeleton.empty;
  }

  /**
   * Gets the element name.
   */
  @Class.Public()
  public get name(): string {
    return this.skeleton.name;
  }

  /**
   * Sets the element name.
   */
  public set name(name: string) {
    this.skeleton.name = name;
  }

  /**
   * Gets the element value.
   */
  @Class.Public()
  public get value(): string {
    return this.skeleton.value;
  }

  /**
   * Sets the element value.
   */
  public set value(value: string) {
    this.skeleton.value = value;
  }

  /**
   * Gets the element default value.
   */
  @Class.Public()
  public get defaultValue(): string {
    return this.skeleton.defaultValue;
  }

  /**
   * Sets the element default value.
   */
  public set defaultValue(value: string) {
    this.skeleton.defaultValue = value;
  }

  /**
   * Gets the required state of the element.
   */
  @Class.Public()
  public get required(): boolean {
    return this.skeleton.required;
  }

  /**
   * Sets the required state of the element.
   */
  public set required(state: boolean) {
    this.skeleton.required = state;
  }

  /**
   * Gets the read-only state of the element.
   */
  @Class.Public()
  public get readOnly(): boolean {
    return this.skeleton.readOnly;
  }

  /**
   * Sets the read-only state of the element.
   */
  public set readOnly(state: boolean) {
    this.skeleton.readOnly = state;
  }

  /**
   * Gets the disabled state of the element.
   */
  @Class.Public()
  public get disabled(): boolean {
    return this.skeleton.disabled;
  }

  /**
   * Sets the disabled state of the element.
   */
  public set disabled(state: boolean) {
    this.skeleton.disabled = state;
  }

  /**
   * Gets the preserve selection state.
   */
  @Class.Public()
  public get preserveSelection(): boolean {
    return this.skeleton.preserveSelection;
  }

  /**
   * Sets the preserve selection state.
   */
  public set preserveSelection(status: boolean) {
    this.skeleton.preserveSelection = status;
  }

  /**
   * Gets the paragraph tag.
   */
  @Class.Public()
  public get paragraphType(): string {
    return this.skeleton.paragraphType;
  }

  /**
   * Sets the paragraph tag.
   */
  public set paragraphType(tag: string) {
    this.skeleton.paragraphType = tag;
  }

  /**
   * Gets the denied tag list.
   */
  @Class.Public()
  public get deniedTags(): string[] {
    return this.skeleton.deniedTags;
  }

  /**
   * Sets the denied tag list.
   */
  public set deniedTags(tags: string[]) {
    this.skeleton.deniedTags = tags;
  }

  /**
   * Gets the element orientation.
   */
  @Class.Public()
  public get orientation(): string {
    return this.skeleton.orientation;
  }

  /**
   * Sets the element orientation.
   */
  public set orientation(orientation: string) {
    this.skeleton.orientation = orientation;
  }

  /**
   * Gets the selected range.
   */
  @Class.Public()
  public get selectedRange(): Range | undefined {
    return this.skeleton.selectedRange;
  }

  /**
   * Gets the selected text.
   */
  @Class.Public()
  public get selectedText(): string | undefined {
    return this.selectedText;
  }

  /**
   * Gets the selected HTML.
   */
  @Class.Public()
  public get selectedHTML(): string | undefined {
    return this.skeleton.selectedHTML;
  }

  /**
   * Gets the selected styles.
   */
  @Class.Public()
  public get selectedStyles(): Styles {
    return this.selectedStyles;
  }

  /**
   * Sets the removal state for the specified element.
   * @param element Element instance.
   * @param state Determines whether the element can be removed by the user or not.
   * @param locker Locker object, should be used to unlock the element.
   * @throws Throws an error when the specified locker for the element is invalid.
   */
  @Class.Public()
  public setRemovalState(element: HTMLElement, state: boolean, locker: any = null): void {
    this.skeleton.setRemovalState(element, state, locker);
  }

  /**
   * Sets the rendering state of the specified node.
   * @param node Node instance.
   * @param state Determines whether the node should be ignored by the renderer or not.
   * @param children Determines whether the node children should be affected or not.
   */
  @Class.Public()
  public setRenderingState(node: Node, state: boolean, children?: boolean): void {
    this.skeleton.setRenderingState(node, state, children);
  }

  /**
   * Clears the current selection.
   */
  @Class.Public()
  public clearSelection(): void {
    this.skeleton.clearSelection();
  }

  /**
   * Move the focus to this element.
   */
  @Class.Public()
  public focus(): void {
    this.skeleton.focus();
  }

  /**
   * Reset the element value to its initial value.
   */
  @Class.Public()
  public reset(): void {
    this.skeleton.reset();
  }

  /**
   * Checks the element validity.
   * @returns Returns true when the element is valid, false otherwise.
   */
  @Class.Public()
  public checkValidity(): boolean {
    return this.skeleton.checkValidity();
  }

  /**
   * Change the font name for the selection or at the insertion point.
   * @param name Font name.
   */
  @Class.Public()
  public fontNameAction(name: string): void {
    this.skeleton.fontNameAction(name);
  }

  /**
   * Change the font size for the selection or at the insertion point.
   * @param size Font size.
   */
  @Class.Public()
  public fontSizeAction(size: string): void {
    this.skeleton.fontSizeAction(size);
  }

  /**
   * Change the font color for the selection or at the insertion point.
   * @param color Font color.
   */
  @Class.Public()
  public fontColorAction(color: string): void {
    this.skeleton.fontColorAction(color);
  }

  /**
   * Change line height for the selection or at the insertion point.
   * @param height Line height.
   */
  @Class.Public()
  public lineHeightAction(height: string): void {
    this.skeleton.lineHeightAction(height);
  }

  /**
   * Formats the specified tag for the selection or insertion point.
   * @param tag HTML tag.
   */
  @Class.Public()
  public formatAction(tag: string): void {
    this.skeleton.formatAction(tag);
  }

  /**
   * Undoes the last executed command.
   */
  @Class.Public()
  public undoAction(): void {
    this.skeleton.undoAction();
  }

  /**
   * Redoes the previous undo command.
   */
  @Class.Public()
  public redoAction(): void {
    this.skeleton.redoAction();
  }

  /**
   * Toggles bold on/off for the selection or at the insertion point.
   */
  @Class.Public()
  public boldAction(): void {
    this.skeleton.boldAction();
  }

  /**
   * Toggles italics on/off for the selection or at the insertion point.
   */
  @Class.Public()
  public italicAction(): void {
    this.skeleton.italicAction();
  }

  /**
   * Toggles underline on/off for the selection or at the insertion point.
   */
  @Class.Public()
  public underlineAction(): void {
    this.skeleton.underlineAction();
  }

  /**
   * Toggles strikeThrough on/off for the selection or at the insertion point.
   */
  @Class.Public()
  public strikeThroughAction(): void {
    this.skeleton.strikeThroughAction();
  }

  /**
   * Creates a bulleted unordered list for the selection or at the insertion point.
   */
  @Class.Public()
  public unorderedListAction(): void {
    this.skeleton.unorderedListAction();
  }

  /**
   * Creates a numbered ordered list for the selection or at the insertion point.
   */
  @Class.Public()
  public orderedListAction(): void {
    this.skeleton.orderedListAction();
  }

  /**
   * Justifies the selection or insertion point to the left.
   */
  @Class.Public()
  public alignLeftAction(): void {
    this.skeleton.alignLeftAction();
  }

  /**
   * Justifies the selection or insertion point to the center.
   */
  @Class.Public()
  public alignCenterAction(): void {
    this.skeleton.alignCenterAction();
  }

  /**
   * Justifies the selection or insertion point to the right.
   */
  @Class.Public()
  public alignRightAction(): void {
    this.skeleton.alignRightAction();
  }

  /**
   * Justifies the selection or insertion point.
   */
  @Class.Public()
  public alignJustifyAction(): void {
    this.skeleton.alignJustifyAction();
  }

  /**
   * Outdents the line containing the selection or insertion point.
   */
  @Class.Public()
  public outdentAction(): void {
    this.skeleton.outdentAction();
  }

  /**
   * Indents the line containing the selection or insertion point.
   */
  @Class.Public()
  public indentAction(): void {
    this.skeleton.indentAction();
  }

  /**
   * Removes the current selection and copies it to the clipboard.
   */
  @Class.Public()
  public cutAction(): void {
    this.skeleton.cutAction();
  }

  /**
   * Copies the current selection to the clipboard.
   */
  @Class.Public()
  public copyAction(): void {
    this.skeleton.copyAction();
  }

  /**
   * Pastes the clipboard contents at the insertion point.
   */
  @Class.Public()
  public pasteAction(): void {
    this.skeleton.pasteAction();
  }

  /**
   * Sets a new zoom into the content element.
   */
  @Class.Public()
  public zoomAction(zoom: number): void {
    this.skeleton.zoomAction(zoom);
  }
}
