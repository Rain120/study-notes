import React, { useEffect, useRef, useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';

import Loading from '@site/static/img/loading.svg'
import styles from './styles.module.css';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Pdf = ({ pdf }) => {
    const [file, setFile] = useState(pdf);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [canChangePage, setCanChangePage] = useState(false);
    const [loaded, setLoaded] = useState(0);
    const [documentWidth, setDocumentWidth] = useState(500);
    const [single, setSingle] = useState(true);
    const documentRef = useRef(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setCanChangePage(true);
    }

    useEffect(() => {
        if (documentRef.current) {
            setDocumentWidth(documentRef.current.offsetWidth);
        }
    }, [documentRef, single]);

    return (
        <div 
            className={styles.container}
        >
            <div 
                className={styles['page-ops']}
            >
                <p>
                Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>
                <button
                    className={styles.button}
                    disabled={!canChangePage}
                    onClick={() => {
                        const page = pageNumber - 1;
                        setPageNumber(page > 1 ? page : 1);
                    }}
                >
                    <span className='text'>Prev</span>
                </button>
                <button
                    className={styles.button}
                    disabled={!canChangePage}
                    onClick={() => {
                        const page = pageNumber + 1;
                        setPageNumber(page >= numPages ? numPages : page);
                    }}
                >
                    <span className='text'>Next</span>
                </button>
                <button
                    className={styles.button}
                    disabled={!canChangePage}
                    onClick={() => {
                        setSingle(!single);
                    }}
                >
                    <span className='text'>{!single ? '单页查看' : '全部'}</span>
                </button>
            </div>
            <h2>暂时无法解决react-pdf中的Document cannot found canvas问题，<br />为了保证其他文档访问正常，暂时封闭入口，感谢关注😊</h2>
            {/* <Document
                className={styles.document}
                options={{
                    cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
                    cMapPacked: true,
                }}
                inputRef={documentRef}
                file={file}
                loading={
                    <span className={styles.loading}>
                        <Loading />
                        <span>Loading PDF {loaded}%</span>
                    </span>
                }
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadProgress={({ loaded, total }) => {
                    setLoaded((loaded / total) * 100 | 0);
                    // console.log('Loading a document: ' + (loaded / total) * 100 + '%')
                }}
            >
                {single ? (
                    <Page
                        className={styles.page}
                        width={documentWidth}
                        pageNumber={pageNumber}
                    />
                ) : (
                    Array.from(
                        new Array(numPages),
                        (el, index) => (
                            <Page
                                className={styles.page}
                                key={`page_${index + 1}`}
                                width={documentWidth}
                                pageNumber={index + 1}
                            />
                        ),
                    )
                )}
            </Document> */}
        </div>
    );
};

export default Pdf;