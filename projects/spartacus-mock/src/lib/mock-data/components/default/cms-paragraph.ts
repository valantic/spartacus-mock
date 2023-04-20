import { faker } from '@faker-js/faker';
import {  Component } from '../../../types';
import {flexTypeComponent} from "./flex-type-component";

export const richTextExampleContent = `<h2>This is a h2 title, ${faker.lorem.words(3)}</h2><h3>and this a h3 title, ${faker.lorem.words(3)}</h3><p>This is a link <a href="https://www.google.ch">Text</a>. Some&nbsp;<strong>bold text</strong> and also some <em>italic text</em>.</p><p>In addition some Superscript like <sup>text</sup>. And some <sub>Subscript</sub>.</p><p>Also we have som special chars&nbsp;©™®&nbsp;¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶¶·¸¹º»¼½¾¿–—×÷<br/></p><p>${faker.lorem.lines(10)}</p><p>And another link &nbsp;<a href="http://www.google.ch/">with a target</a>&nbsp;blank</p><p>As, rich single shot dark kopi-luwak percolator black extra. Grounds, single origin black milk cinnamon grinder turkish instant.</p><p>Now we see some unordered and ordered lists:</p><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><ol><li>Item</li><li>Item</li><li>Item</li></ol><p>Paragraph after UL / OL</p><h3>Heading H3</h3><p>Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo.</p><h2>Heading H2, ${faker.lorem.words(3)}</h2><p>${faker.lorem.lines(10)}</p>`;

export const cmsParagraphComponent = (content?: string): Component => {
  return flexTypeComponent('CMSParagraphComponent', undefined, {
    content: content ?? richTextExampleContent
  });
};
