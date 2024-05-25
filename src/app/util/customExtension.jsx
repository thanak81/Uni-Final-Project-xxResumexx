import React from "react";
import { Node } from "@tiptap/react";
import { Plugin, TextSelection, Transaction } from "@tiptap/pm/state";
import { Decoration, DecorationSet } from "@tiptap/pm/view";
export const AutoCompleteNode = Node.create({
  name: "autoCompleteExtension",
  addOptions() {
    return {
        className: "autocomplete-suggestion",
    };
},
  addProseMirrorPlugins() {
    return [
      new Plugin({
        state: {
          init() {
            return DecorationSet.empty;
          },
          apply: (transaction, oldSet) => {
            let decorationSet = DecorationSet.empty;

            const selection = transaction.selection;
            if (!(selection instanceof TextSelection)) {
              return decorationSet;
            }

            // This will add the widget decoration at the cursor position
            const cursorPos = selection.$head.pos;
            const nextNode = transaction.doc.nodeAt(cursorPos);

            if (!nextNode || nextNode.isBlock) {
              const helloWorldDecoration = Decoration.widget(
                cursorPos,
                () => {
                  const parentNode = document.createElement("span");

                //   let textContent = decideAutocompleteText(
                //     selection,
                //     this.options.delayBeforeShow
                //   );

                let textContent = storage.autosuggestion || "";
                if(textContent === ""){
                    return decorationSet;
                }

                  // Create a span for the suggestion
                  const c =
                    '<span class="uppercase text-xs py-0.5 px-1 relative bottom-px font-semibold border-[1.5px] border-border-strong rounded">$1</span>';
                  textContent = textContent.replace(/\[(.*?)\]/g, c);
                  parentNode.innerHTML = textContent;
                  parentNode.classList.add(this.options.className);

                  return parentNode;
                },
                { side: 1 }
              );

              decorationSet = decorationSet.add(transaction.doc, [
                helloWorldDecoration,
              ]);
            }
            return decorationSet;
          },
        },
        props: {
          decorations(state) {
            return this.getState(state);
          },
        },
      }),
    ];
  },
});
