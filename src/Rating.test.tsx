import {describe, it, expect} from 'vitest';
import {Rating} from './Rating';
import {fireEvent, render, screen} from '@testing-library/react'

describe('Rating', () => {

    it('should show the vote down button', async () => {
        render(<Rating rating={2}/>);

        const voteDown = await screen.findByTestId('voteDown');
        expect(voteDown.textContent).toBe('👎');
    })

    it('should show the vote down up', async () => {
        render(<Rating rating={2}/>);

        const voteDown = await screen.findByTestId('voteUp');
        expect(voteDown.textContent).toBe('👍');
    });

    it('should show the stars by the number of ratings', async () => {
        render(<Rating rating={2}/>);

        const stars = await screen.findAllByTestId('star');
        expect(stars).toHaveLength(2);
    });

    it('should increase the number of stars when clicking on the up vote button', async () => {
        render(<Rating rating={2}/>);

        let stars = await screen.findAllByTestId('star');
        expect(stars).toHaveLength(2);

        const voteDown = await screen.findByTestId('voteDown');

        fireEvent.click(voteDown);

        stars = await screen.findAllByTestId('star');
        expect(stars).toHaveLength(1);
    })
})