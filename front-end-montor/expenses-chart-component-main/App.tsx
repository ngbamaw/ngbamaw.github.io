import React from "react";
import ExpensesChartComponentMain from "./style";
import { ReactComponent as Logo } from "./images/logo.svg";
import data from "./data.json";
import "./font.css";
import classNames from "classnames";

const App = () => {
    const highest = data.reduce((acc, curr) => {
        return acc.amount > curr.amount ? acc : curr;
    });
    
    const [active, setActive] = React.useState("");
    return (
        <ExpensesChartComponentMain>
            <div className="container">
                <header>
                    <div className="header__left-side">
                        <p className="title">My balance</p>
                        <p className="price">$921.48</p>
                    </div>
                    <Logo className="header__logo" />
                </header>
                <main>
                    <h2>Spending - Last 7 days</h2>
                    <div className="chart">
                        {data.map(({ day, amount }) => (
                            <div className="chart__bar">
                                <div
                                    className={classNames("chart__bar-inner", {
                                        highest: amount === highest.amount,
                                        active: active === day,
                                    })}
                                    style={{
                                        height: `${
                                            (amount / highest.amount) * 100
                                        }%`,
                                        zIndex: active === day ? 1 : 0,
                                    }}
                                    onClick={() => setActive(day)}
                                    onBlur={() => setActive("")}
                                >
                                    <p className="chart__bar-amount">
                                        ${amount}
                                    </p>
                                </div>
                                <p className="chart__bar-day">{day}</p>
                            </div>
                        ))}
                    </div>
                    <hr />
                    <div className="chart__legend">
                        <div className="chart__legend-total-month">
                            <p className="label"> Total this month</p>
                            <p className="price">$478.33</p>
                        </div>
                        <div className="chart__legend-pourcent">
                            <p className="value">+2.4%</p>
                            <p className="label">from last month</p>
                        </div>
                    </div>
                </main>
            </div>
        </ExpensesChartComponentMain>
    );
};

export default App;
