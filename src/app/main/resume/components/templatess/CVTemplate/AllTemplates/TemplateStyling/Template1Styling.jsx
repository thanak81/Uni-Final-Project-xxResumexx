import { draggable, useGap, useLineHeight, usePadding } from '@/app/main/resume/state/GlobalState';
import { Slider } from '@nextui-org/react'
import { Button } from '@radix-ui/themes'
import React from 'react'

function Template1Styling() {
    const setPaddingBottom = usePadding((state) => state.setValue);
    const paddingBottom = usePadding((state) => state.value);
    const line = useLineHeight((state) => state.value);
    const setLine = useLineHeight((state) => state.setValue);
    const gap = useGap((state) => state.value);
    const setGap = useGap((state) => state.setValue);

    const drag = draggable((state)=> state.setDraggable)
    

  return (
    <>
      <Slider
          label="Padding Y"
          step={5}
          value={paddingBottom}
          maxValue={20}
          onChange={setPaddingBottom}
          className="max-w-md"
        />
        {paddingBottom !== 10 && (
          <Button className='my-2 cursor-pointer' onClick={() => setPaddingBottom(10)}>Reset</Button>
        )}
        <Slider
          label="Line Height"
          step={10}
          value={line}
          maxValue={50}
          onChange={setLine}
          className="max-w-md"
        />
        {line !== 30 && <Button className='my-2 cursor-pointer' onClick={() => setLine(30)}>Reset</Button>}
        <Slider
          label="Category Gap"
          step={2}
          value={gap}
          maxValue={6}
          onChange={setGap}
          className="max-w-md"
        />
        {gap !== 4 && <Button className='my-2 cursor-pointer' onClick={() => setGap(4)}>Reset</Button>}
    </>
  )
}

export default Template1Styling