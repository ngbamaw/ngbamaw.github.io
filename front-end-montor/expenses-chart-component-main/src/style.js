import styled from "styled-components";

const ExpensesChartComponentMain = styled.div`
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    background-color: hsl(27, 66%, 92%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .container {
        width: 95%;
        max-width: 30em;
        margin-inline: 1rem;
        display: flex;
        gap: 12px;
        flex-direction: column;
        color: hsl(25, 47%, 15%);
        header {
            width: 100%;
            padding: 24px;
            background-color: hsl(10, 79%, 65%);
            border-radius: 1rem;
            display: flex;
            align-items: center;
            .header__left-side {
                color: hsl(33, 100%, 98%);
                .price {
                    font-size: 2rem;
                    font-weight: 700;
                }
            }
            .header__logo {
                margin-left: auto;
            }
        }
        main {
            padding: 24px;
            background-color: hsl(33, 100%, 98%);
            border-radius: 1rem;
            display: flex;
            flex-direction: column;
            gap: 24px;
            h2 {
                margin-bottom: 2rem;
            }
            .chart {
                display: flex;
                gap: 1.5rem;
                height: 200px;
                @media screen and (max-width: 600px) {
                    gap: 12px;
                }
                .chart__bar {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    .chart__bar-inner {
                        background-color: hsl(10, 79%, 65%);
                        border-radius: 0.5rem;
                        margin-top: auto;
                        position: relative;
                        &.highest {
                            background-color: hsl(186, 34%, 60%);
                        }

                        .chart__bar-amount {
                            position: absolute;
                            color: hsl(33, 100%, 98%);
                            background-color: hsl(25, 47%, 15%);
                            padding: 0.5rem;
                            transform: translateY(0);
                            transition: all 0.3s ease-in-out;
                            opacity: 0;
                            border-radius: 0.5rem;
                            font-weight: 700;
                            z-index: 9999;
                        }
                        &.active {
                            filter: brightness(1.2);
                            .chart__bar-amount {
                                transform: translateY(calc(-100% - 4px));
                                opacity: 1;
                            }
                        }
                    }
                    .chart__bar-day {
                        text-align: center;
                        color: hsl(28, 10%, 53%);
                    }
                }
            }
            hr {
                border: none;
                background-color: hsl(27, 66%, 92%);
                height: 0.3rem;
            }
            .chart__legend {
                font-size: 2rem;
                display: flex;
                .chart__legend-total-month {
                    .label {
                        font-size: 1rem;
                        color: hsl(28, 10%, 53%);
                    }
                    .price {
                        font-size: 2rem;
                        font-weight: 700;
                    }
                }
                .chart__legend-pourcent {
                    margin-left: auto;
                    margin-top: auto;
                    .label {
                        font-size: 1rem;
                        color: hsl(28, 10%, 53%);
                    }
                    .value {
                        font-size: 1rem;
                        font-weight: 700;
                    }
                }
            }
        }
    }
`;

export default ExpensesChartComponentMain;
