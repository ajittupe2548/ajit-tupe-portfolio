To add resume page

Create resume folder inside app folder.

Create page.tsx file in resume folder and paste below code in page.tsx

```
import React from 'react';
import Link from 'next/link';
import Resume from '@/components/Resume';

export default function ResumePage() {
    return (
        <div className='container mx-auto px-4 max-w-5xl'>
            <div className='flex justify-end mb-4'>
                <Link
                    className='mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400'
                    role='button'
                    target='_blank'
                    href='https://drive.google.com/file/d/1AE5hnwbQSJ9TM1MVVi7E9GyK39HPrhOq/view?usp=sharing'
                >
                    Download PDF
                </Link>
            </div>
            <div id='resume'>
                <Resume />
            </div>
        </div>
    );
}
```
